import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useLogout from "./SignOut";

const SignOutConfirmation = ({
  open,
  setOpen,
}: {
  open: boolean | undefined;
  setOpen: (open: boolean) => void;
}) => {
  const logout = useLogout();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Sign Out Confirmation</DialogTitle>
        <DialogDescription>
          Are you sure you want to log out? You will need to log in again to
          access this page.
        </DialogDescription>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={logout}
            className="cursor-pointer hover:bg-red-700"
          >
            Yes, Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignOutConfirmation;
