import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getonlyOneUser, updateUserData } from '@/services/UserServices/UserService';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const numericId = parseInt(id ?? "0", 10);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['user', numericId],
    queryFn: () => getonlyOneUser(numericId),
    enabled: !isNaN(numericId),
  });

  const userData = data?.data;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (userData) {
      setFirstName(userData.firstName || "");
      setLastName(userData.lastName || "");
      setStatus(userData.status || "");
    }
  }, [userData]);

  const { mutate: updateUser} = useMutation({
    mutationFn: ({ id, data }: { id: number; data: FormData }) =>
      updateUserData({ id, data }),
    onSuccess: () => {
      alert("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate(`/edituser/${id}`);
    },
    onError: () => {
        alert("Failed to update user");
    },
  });

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("status", status);
    updateUser({ id: numericId, data: formData });
    // navigate('/finance')
  };

  return (
    <div className="mt-14 flex items-center justify-center bg-white px-2 min-h-screen">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Edit User</h2>

        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Status</Label>
          <Select value={status} onValueChange={(value) => setStatus(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Deactivated">Deactivated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full mt-2" onClick={handleUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
}

export default EditUser;
