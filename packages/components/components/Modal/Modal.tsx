import React, { useCallback } from "react";
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
  height: 32,
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

const Modal: React.FC<{
  title: string;
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  confirmText?: string;
  onConfirm?: () => void | Promise<void>;
}> = ({
  title,
  isOpen,
  setIsOpen,
  children,
  confirmText = "Submit",
  onConfirm,
}) => {
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
    const result = onConfirm?.();
    if (result) {
      result.then(close);
    } else {
      close();
    }
  }, [onConfirm, close]);
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
                <Button onClick={close} type="secondary">
                  Cancel
                </Button>
                <ConfirmButton
                  onClick={onConfirmClick}
                  type="primary"
                  tone="wheat"
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
