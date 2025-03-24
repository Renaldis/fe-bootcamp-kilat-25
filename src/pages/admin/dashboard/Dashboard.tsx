import TableList from "./TableList";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGuests } from "@/services/guests/mutations/use-guests";
import { ThumbsUp, User } from "lucide-react";

export default function DashboardPage() {
  const { data, isLoading } = useGuests();
  const guests = data?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const presentGuests = guests.filter(
    (guest) => guest.status_hadir === true
  ).length;

  return (
    <div className="bg-white p-8 rounded-md shadow-sm">
      <div className="mb-5 flex space-x-5">
        <div className="card w-40 h-35 flex flex-col items-center bg-sky-200 py-5 rounded-lg">
          <User className="text-sky-700" size={30} />
          <span className="font-bold text-sky-700">Total registered</span>
          <span className="font-bold text-sky-700">{guests.length}</span>
        </div>
        <div className="card w-40 h-35 flex flex-col items-center bg-yellow-100 py-5 rounded-lg">
          <ThumbsUp className="text-yellow-700" size={30} />
          <span className="font-bold text-yellow-700">Total attendees</span>
          <span className="font-bold text-yellow-700">{presentGuests}</span>
        </div>
      </div>

      <h1 className="font-bold mb-5">List Guests</h1>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-100">
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead className="w-[100px]">No Telp</TableHead>
            <TableHead className="w-[100px]">is Present?</TableHead>
            <TableHead className="w-[100px] text-start">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table List */}
        <TableBody>
          {guests.length > 0 ? (
            guests.map((guest, idx) => (
              <TableList key={guest.id} guest={guest} idx={idx} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-slate-500">
                No guests found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
