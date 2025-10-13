import Link from "next/link";
import "./style.css";
export default function userList() {
  return (
    <div>
      <h1>Users list Page</h1>
      <Link href="/users/1">user-1</Link>
      <br />
      <Link href="/users/2">user-2</Link>
      <br />
      <Link href="/users/3">user-3</Link>
    </div>
  );
}
