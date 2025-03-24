import ConfirmationModal from "@/components/ConfirmationModal";
import EditGuestForm from "@/components/form/guests/EditGuestForm";
import { TableCell, TableRow } from "@/components/ui/table";
import { useDeleteGuest } from "@/services/guests/mutations/soft-delete-guests";
import { Tamu } from "@/types/tamu";
import { useState } from "react";
import { toast } from "sonner";

export default function TableList({
  guest,
  idx,
}: {
  guest: Tamu;
  idx: number;
}) {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const { mutate } = useDeleteGuest();

  const HandleDelete = () => {
    mutate(guest.id.toString(), {
      onSuccess: () => {
        toast.success("Guest successfully deleted!");
      },
      onError: () => {
        toast.error("Failed to delete guest. Please try again!");
      },
    });
  };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium w-[100-px]">{idx + 1}</TableCell>
        <TableCell className="w-[100px]">{guest.name}</TableCell>
        <TableCell className="w-[100px]">{guest.no_hp}</TableCell>
        <TableCell
          className={`w-[100px]  font-semibold uppercase ${
            guest.status_hadir == false ? "text-red-700" : "text-green-700"
          }`}
        >
          {guest.status_hadir == false ? "not present" : "present"}
        </TableCell>
        <TableCell className="w-[100px] flex gap-2 items-center">
          <i
            className="fas fa-edit text-cyan-600 dark:text-cyan-500 hover:text-cyan-800 cursor-pointer"
            onClick={() => setIsOpenEditModal(true)}
          />
          <i
            className="fas fa-trash text-red-600 hover:text-red-800 cursor-pointer"
            onClick={() => setIsOpenConfirmModal(true)}
          />
        </TableCell>
        {isOpenConfirmModal && (
          <ConfirmationModal
            open={isOpenConfirmModal}
            setOpen={setIsOpenConfirmModal}
            title="Delete Guest"
            description="Are you sure you want to delete this guest?"
            onConfirm={HandleDelete}
          />
        )}
        {isOpenEditModal && (
          <EditGuestForm open={isOpenEditModal} setOpen={setIsOpenEditModal} guestId={guest.id} />
        )}
      </TableRow>
    </>
  );
}
