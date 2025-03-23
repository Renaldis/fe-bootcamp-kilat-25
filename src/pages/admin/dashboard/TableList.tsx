import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tamu } from "@/types/tamu";

export default function TableList({
  guest,
  idx,
}: {
  guest: Tamu;
  idx: number;
}) {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="font-medium w-[100-px]">{idx + 1}</TableCell>
        <TableCell className="w-[100px]">{guest.name}</TableCell>
        <TableCell className="w-[100px]">{guest.no_hp}</TableCell>
        <TableCell
          className={`w-[100px]  font-semibold uppercase ${
            guest.status_hadir == false ? "text-red-700" : "text-green-700"
          }`}
        >
          {guest.status_hadir == false ? "not present" : "already present"}
        </TableCell>
        <TableCell className="w-[100px] flex gap-2 items-center">
          <i className="fas fa-edit text-cyan-600 dark:text-cyan-500 hover:text-cyan-800 cursor-pointer"></i>
          <i className="fas fa-trash text-red-600 hover:text-red-800 cursor-pointer"></i>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
