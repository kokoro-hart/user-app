import { HeaderLayout } from "@/components/Layouts/HeaderLayout";
import { UserCards } from "@/features/Users/UserCards";

const UserManagement = () => {
  return (
    <>
      <HeaderLayout>
        <UserCards />
      </HeaderLayout>
    </>
  );
};

export default UserManagement;
