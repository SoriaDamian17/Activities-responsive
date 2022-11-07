export default function Card(props) {
  const { title, subtitle, status, href } = props;
  const css = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  };
  return (
    <div style={css}>
      <span>{status}</span>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <a href={href}>Ingresar</a>
    </div>
  );
}
