import sidebarImg from "../images/bg-sidebar-desktop.svg";
export default function Sidebar(props) {
  let bgCircleStyle = {
    backgroundColor: "hsl(206, 94%, 87%)",
    color: "black",
  };
  let isActive = props.isActive;

  return (
    <>
      <div id="sidebar">
        <div className="sidebar-info sidebar-item">
          <div className="circle" style={isActive === 1 ? bgCircleStyle : null}>
            <h3
              className="number"
              style={isActive === 1 ? bgCircleStyle : null}
            >
              1
            </h3>
          </div>
          <div className="number-item">
            <p>STEP 1</p>
            <h2>YOUR INFO</h2>
          </div>
        </div>
        <div className="sidebar-select sidebar-item">
          <div className="circle" style={isActive === 2 ? bgCircleStyle : null}>
            <h3
              className="number"
              style={isActive === 2 ? bgCircleStyle : null}
            >
              2
            </h3>
          </div>
          <div className="number-item">
            <p>STEP 2</p>
            <h2>SELECT PLAN</h2>
          </div>
        </div>
        <div className="sidebar-add sidebar-item">
          <div className="circle" style={isActive === 3 ? bgCircleStyle : null}>
            <h3
              className="number"
              style={isActive === 3 ? bgCircleStyle : null}
            >
              3
            </h3>
          </div>
          <div className="number-item">
            <p>STEP 3</p>
            <h2>ADD-ONS</h2>
          </div>
        </div>
        <div className="sidebar-summary sidebar-item">
          <div className="circle" style={isActive === 4 ? bgCircleStyle : null}>
            <h3
              className="number"
              style={isActive === 4 ? bgCircleStyle : null}
            >
              4
            </h3>
          </div>
          <div className="number-item">
            <p>STEP 4</p>
            <h2>SUMMARY</h2>
          </div>
        </div>
      </div>
    </>
  );
}
