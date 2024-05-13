import { ReactNode } from "react";

export const Modal = (props: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const { open, onClose, children } = props;

  return (
    <>
      {open && (
        <div className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
              ></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
