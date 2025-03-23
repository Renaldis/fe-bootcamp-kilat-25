import TableList from "./TableList";
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGuests } from "@/services/guests/mutations/use-guests";

export default function DashboardPage() {
  const { data, isLoading } = useGuests();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-md shadow-sm">
      <h1 className="font-bold mb-5">List Guests</h1>
      <Table>
        <TableCaption>A list of guest.</TableCaption>
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
        {data?.data?.map((guest, idx) => {
          return <TableList key={guest.id} guest={guest} idx={idx} />;
        })}
      </Table>
    </div>
  );
}
