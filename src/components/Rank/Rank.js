import React from "react";



//pure function
const Rank = ({name, entries}) => {
  return (
    <div>
    <div className="white f3">
        {`${name} entry counter ...`}
        </div>
    <div className="white f1">
    {entries}

    </div>
    </div>
  );
}

export default Rank;