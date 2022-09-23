import Button from "../../Button";

export default function MenuItems(data) {
  return (
    <Button
      menu
      to={data.data.to}
      leftIcon={data.data.icon}
      onClick={data.data.onClick}
    >
      {data.data.title}
    </Button>
  );
}
