export const flipper = (props: {[x: string]: string}) => (
  <div id="dashboard" className="shadow">
  <div className="widget-inner loadable" id="a">
    {props.children[0]}
  </div>
  <div className="widget-inner loadable" id="b">
    {props.children[0]}
  </div>
</div>
);