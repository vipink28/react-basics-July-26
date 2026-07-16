// props parameter is used to pass data in a component from the parent component.
// props parameter is an object in which properties are created when the component tag is used and attributes are passed.

const Child = (props) => {
  //props = {title:"Child 2", children:content between opening and closing tag.}
  return (
    <div className="child-wrapper">
      <h4>{props.title}</h4>
      {props.showDetails && <p>this is paragraph</p>}
      {props.children}
    </div>
  );
};

export default Child;
