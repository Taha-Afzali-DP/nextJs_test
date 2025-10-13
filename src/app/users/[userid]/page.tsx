interface PropsType {
  params: { userid: string };
}
export default function userdetils(props: PropsType) {
  const { userid } = props.params;
  return (
    <div>
      <h1>Users detils Page :{userid}</h1>
    </div>
  );
}
