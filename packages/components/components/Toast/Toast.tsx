import * as React from "react";
import { styled } from "../../stitches.config";
import { useCallback, useEffect, useRef } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import SuccessIcon from "../../assets/Success.svg";
import WarningIcon from "../../assets/Warning.svg";
import ErrorIcon from "../../assets/Error.svg";

const ToastRoot = styled("div", {
  zIndex: 1400,
  position: "fixed",
  display: "flex",
  left: "24px",
  bottom: "24px",
  justifyContent: "center",
  alignItems: "center",
});

const Icons = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

type ToastIntent = "success" | "warning" | "error";

const ToastContent = styled("div", {
  boxShadow: `0px 4px 12px rgba(123, 94, 53, 0.23)`,
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  width: "375px",
  variants: {
    intent: {
      success: {
        border: "1px solid #06DF59",
        backgroundColor: "#A2FFB3",
        color: "#324841",
      },
      warning: {
        borderColor: "1px solid #DEAE6A",
        backgroundColor: "#FEE9CB",
        color: "#493922",
      },
      error: {
        borderColor: "1px solid #D97763",
        backgroundColor: "#F6DACD",
        color: "#6B2115",
      },
    },
  },
});

const ToastMain = styled("div", {
  display: "flex",
});

const IconContainer = styled("div", {
  marginRight: "12px",
});

const CrossIconContainer = styled("div", {
  marginLeft: "12px",
  "& svg": {
    cursor: "pointer",
  },
});

const MessageContainer = styled("div", {
  flexGrow: 1,
});

const StatusTitle = styled("h1", {
  fontFamily: "$mono",
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "16px",
  marginBottom: "4px",
  marginTop: 0,
});

const StatusMessage = styled("span", {
  fontFamily: "$sans",
  fontSize: "12px",
  lineHeight: "18px",
  marginBottom: "8px",
});

const StatusFooter = styled("div", {
  display: "flex",
  flexDirection: "row-reverse",
  "& button": {
    marginLeft: "12px",
    fontFamily: "$mono",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    background: "transparent",
    border: "none",
  },
  "& button:hover": {
    background: "#88888880",
    cursor: "pointer",
  },
});

const Toast = ({
  actions = [],
  autoHideDuration = 5000,
  intent = "success",
  isOpen,
  message,
  onClose,
  showCloseIcon = false,
  title,
}: {
  actions?: { text: string; onClick: () => void }[];
  autoHideDuration?: number | null;
  intent?: ToastIntent;
  isOpen: boolean;
  message: React.ReactNode;
  onClose: () => void;
  showCloseIcon?: boolean;
  title?: React.ReactNode;
}) => {
  // original inspiration: https://github.com/mui-org/material-ui/blob/bf78a4a212cb328c951a9f3590a9518c72168f5c/packages/mui-material/src/Snackbar/Snackbar.js
  // future possible props to support:
  // - className
  // - position
  const timerAutoHide = useRef(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  const setAutoHideTimer = useCallback(
    (autoHideDurationParam) => {
      if (autoHideDurationParam == null) {
        return;
      }

      clearTimeout(timerAutoHide.current);
      timerAutoHide.current = window.setTimeout(onClose, autoHideDurationParam);
    },
    [onClose, timerAutoHide]
  );

  React.useEffect(() => {
    if (isOpen) {
      setAutoHideTimer(autoHideDuration);
    }

    return () => {
      clearTimeout(timerAutoHide.current);
    };
  }, [isOpen, autoHideDuration, setAutoHideTimer]);

  // Pause the timer when the user is interacting with the Toast
  // or when the user hide the window.
  const handlePause = useCallback(() => {
    clearTimeout(timerAutoHide.current);
  }, [timerAutoHide]);

  // Restart the timer when the user is no longer interacting with the Toast
  // or when the window is shown back.
  const handleResume = useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(autoHideDuration * 0.5);
    }
  }, [autoHideDuration, setAutoHideTimer]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);

      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return undefined;
  }, [handleResume, isOpen]);

  const handleKeyDown = useCallback(
    (nativeEvent: KeyboardEvent) => {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          onClose();
        }
      }
    },
    [onClose]
  );

  const handleClickAway = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!nodeRef.current) {
        return;
      }
      const target = event.target as HTMLElement;
      const insideDOM = event.composedPath
        ? event.composedPath().indexOf(nodeRef.current) > -1
        : document.contains(target) || nodeRef.current.contains(target);

      if (!insideDOM) {
        onClose();
      }
    },
    [nodeRef, onClose]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickAway);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) {
    return null;
  }
  const Icon = Icons[intent];

  return (
    <ToastRoot
      onBlur={handleResume}
      onFocus={handlePause}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      ref={nodeRef}
    >
      <ToastContent intent={intent}>
        <ToastMain>
          <IconContainer>
            <Icon />
          </IconContainer>
          <MessageContainer>
            {title && <StatusTitle>{title}</StatusTitle>}
            <StatusMessage>{message}</StatusMessage>
          </MessageContainer>
          {showCloseIcon && (
            <CrossIconContainer>
              <Cross1Icon onClick={onClose} />
            </CrossIconContainer>
          )}
        </ToastMain>
        {!!actions.length && (
          <StatusFooter>
            {actions.map((a, key) => (
              <button key={key} onClick={a.onClick}>
                {a.text}
              </button>
            ))}
          </StatusFooter>
        )}
      </ToastContent>
    </ToastRoot>
  );
};

export default Toast;
