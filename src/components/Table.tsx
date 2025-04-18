import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getUserData } from "@/services/UserServices/UserService";
import LoadingSpinner from "./Loading";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";


export function UserTable() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["users", pagination.current, pagination.pageSize],
    queryFn: () => getUserData(pagination.current, pagination.pageSize),
    // keepPreviousData: true,
  });

  const totalData = data?.total || 0;
  const userData = data?.data || [];

  const totalPages = Math.ceil(totalData / pagination.pageSize);

  const handlePrev = () => {
    if (pagination.current > 1) {
      setPagination({ ...pagination, current: pagination.current - 1 });
    }
  };

  const handleNext = () => {
    if (pagination.current < totalPages) {
      setPagination({ ...pagination, current: pagination.current + 1 });
    }
  };

  const navigate = useNavigate()
  const handleEdit = (id:any) => {
    navigate(`/edituser/${id}`)
  }
  const handleDelete = (id:any) => {
    deleteMutation.mutate({id:id})
  }

  const qureyClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn:deleteUser,
    onSuccess: () => {
      alert("User Deleted Successfully");
      qureyClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      alert("User Delete Failed");
    }
  });
  

  return (
    <div className="space-y-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Table>
            <TableCaption>A list of users with pagination.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">User Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Updated At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.firstName + " " + item.lastName}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                  <Badge className={`${
                    item.status === "Active" ? 
                    "bg-green-500 text-white" : 
                    "bg-red-500 text-white"
                    
                    }`}>
    {item.status}
  </Badge>
                  </TableCell>
                  <TableCell>
                  <Badge className={`${
                    item.status === "POPOP" ? 
                    "bg-blue-500 text-white" : 
                    "bg-black text-white"
                    
                    }`}>
    {item.role}
  </Badge>
                  </TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>{item.updatedAt}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button onClick={() => handleEdit(item.id)} className="bg-green-500 text-white rounded p-2" size="sm">Edit</Button>
                    <Button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white rounded p-2" size="sm">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={6} className="text-right text-sm text-muted-foreground">
                  Showing {userData.length} of {totalData} users
                </TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center">
            <Button onClick={handlePrev} disabled={pagination.current === 1}>
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {pagination.current} of {totalPages}
            </span>
            <Button onClick={handleNext} disabled={pagination.current === totalPages}>
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
