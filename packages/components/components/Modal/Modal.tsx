import React, { useCallback, useState } from "react";
import { Portal } from "react-portal";
import Button from "../Button";
import { Cross1Icon } from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";

const CloseIcon = styled(Cross1Icon, {
  position: "absolute",
});
const ModalBackdrop = styled("div", {
  position: "fixed",
  backgroundColor: "#32484180",
  zIndex: -1,
  inset: 0,
});
const ModalRoot = styled("div", {
  position: "fixed",
  zIndex: 1300,
  inset: 0,
});
const ModalContainer = styled("div", {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ModalBody = styled("div", {
  maxWidth: 600,
  minWidth: 400,
  margin: 32,
  boxShadow: "0px 12px 50px -24px rgba(0, 0, 0, 0.24);",
  background: "$sand",
});
const ModalHeader = styled("div", {
  backgroundColor: "$forest",
  paddingTop: 12,
  paddingLeft: 40,
  paddingRight: 16,
  paddingBottom: 12,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const ModalTitle = styled("span", {
  fontSize: "$lg",
  fontWeight: 600,
  fontFamily: "$mono",
  color: "$sand",
});
const ModalContent = styled("div", { padding: 40, fontFamily: "$sans" });
const ModalFooter = styled("div", { display: "flex", justifyContent: "right" });
const ConfirmButton = styled(Button, {
  marginLeft: 32,
});
const Loading = styled("span", { marginRight: "8px", fontFamily: "$sans" });

const Modal: React.FC<{
  title: string;
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  confirmText?: string;
  onConfirm?: () => void | Promise<void> | boolean | Promise<boolean>;
}> = ({
  title,
  isOpen,
  setIsOpen,
  children,
  confirmText = "Submit",
  onConfirm,
}) => {
  const [loading, setLoading] = useState(false);
  const close = useCallback(() => setIsOpen(false), [setIsOpen]);
  const onContainerKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );
  const onConfirmClick = useCallback(() => {
    setLoading(true);
    const result = onConfirm?.();
    if (typeof result === "object") {
      result
        .then((keepAlive) => !keepAlive && close())
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      if (!result) {
        close();
      }
    }
  }, [onConfirm, close, setLoading]);
  return isOpen ? (
    <Portal>
      <ModalRoot>
        <ModalBackdrop aria-hidden="true" onClick={close} tabIndex={-1} />
        <ModalContainer onKeyDown={onContainerKeyDown} tabIndex={-1}>
          <ModalBody>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <Button tone="wheat" onClick={close} type="icon">
                <CloseIcon />
              </Button>
            </ModalHeader>
            <ModalContent>
              {children}
              <ModalFooter>
                {loading && <Loading>Loading...</Loading>}
                <Button onClick={close} type="secondary" disabled={loading}>
                  Cancel
                </Button>
                <ConfirmButton
                  onClick={onConfirmClick}
                  type="primary"
                  tone="wheat"
                  disabled={loading}
                >
                  {confirmText}
                </ConfirmButton>
              </ModalFooter>
            </ModalContent>
          </ModalBody>
        </ModalContainer>
      </ModalRoot>
    </Portal>
  ) : null;
};

export default Modal;
