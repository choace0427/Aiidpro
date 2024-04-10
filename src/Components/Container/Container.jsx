export default function Container(props) {
  const { children, className } = props;
  return (
    <div {...props} className={`w-full px-6 ${className}`}>
      <div className=''>{children}</div>
    </div>
  );
}
