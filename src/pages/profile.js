import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react"

import Head from "next/head";
const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>{session?.user?.name}</h1>
      <Avatar size={64} src={session?.user?.image} />
    </div>
  );
};

export default ProfilePage;
