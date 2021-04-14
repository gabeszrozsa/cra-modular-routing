const EmployeeLayout = (props: { children: JSX.Element }) => {
  return (
    <div>
      EmployeeLayout:
      <hr />
      {props.children}
    </div>
  );
};

export default EmployeeLayout;
