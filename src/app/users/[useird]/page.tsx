interface PropsType {
  params: { userId: string };
}
export default function userdetils(props: PropsType) {
  const userid = props.params.userId;
  return (
    <div>
      <h1>Users detils</h1>
    </div>
  );
}
