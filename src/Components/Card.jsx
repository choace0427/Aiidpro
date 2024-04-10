export default function Card(props) {
  const { children, className, style } = props;

  return (
    <div className={`bg-white p-8 flex flex-col gap-8 rounded-2xl ${className}`} style={style}>
      {children}
    </div>
  );
}
