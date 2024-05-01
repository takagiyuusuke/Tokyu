import "./App.css";
import { useState } from "react";

interface Props {
  top: number;
  left: number;
  name: string;
  pos: "u" | "l" | "r" | "d" | "s";
  stress1?: boolean;
  stress2?: boolean;
  stationNumber: string[];
}

export const Station: React.FC<Props> = ({
  top,
  left,
  name,
  pos,
  stress1 = false,
  stress2 = false,
  stationNumber,
}) => {
  const fontsize = pos === "s" ? 16 : stress1 ? 20 : 16;
  const [display, setDisplay] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <div
        className="station"
        style={{
          top: top,
          left: left,
          position: "absolute",
          backgroundColor: stress1
            ? "purple"
            : stress2
            ? "yellowgreen"
            : "white",
        }}
      ></div>
      {pos === "l" && (
        <p
          style={{
            position: "absolute",
            top: top - fontsize - 1,
            left: left - 5 - name.length * fontsize,
            whiteSpace: "nowrap",
            fontWeight: stress1 || stress2 ? "bold" : "normal",
            color: stress1 ? "red" : "black",
            textShadow: stress1
              ? "yellow 1px 0 8px"
              : stress2
              ? "skyblue 1px 0 8px"
              : "none",
            fontSize: fontsize,
          }}
        >
          {name}
        </p>
      )}
      {pos === "r" && (
        <p
          style={{
            position: "absolute",
            top: top - fontsize + 4,
            left: left + 20,
            whiteSpace: "nowrap",
            fontWeight: stress1 || stress2 ? "bold" : "normal",
            color: stress1 ? "red" : "black",
            textShadow: stress1
              ? "yellow 1px 0 8px"
              : stress2
              ? "skyblue 1px 0 8px"
              : "none",
            fontSize: fontsize,
          }}
        >
          {name}
        </p>
      )}
      {(pos === "u" || pos === "s") && (
        <p
          style={{
            position: "absolute",
            top: top - 2 - name.length * fontsize,
            left: left - fontsize - 1,
            whiteSpace: "nowrap",
            writingMode: "vertical-rl",
            fontWeight: stress1 || stress2 ? "bold" : "normal",
            color: stress1 ? "red" : "black",
            textShadow: stress1
              ? "yellow 1px 0 8px"
              : stress2
              ? "skyblue 1px 0 8px"
              : "none",
            fontSize: fontsize,
          }}
        >
          {name}
        </p>
      )}
      {pos === "d" && (
        <p
          style={{
            position: "absolute",
            top: top + 23,
            left: left - fontsize - 1,
            whiteSpace: "nowrap",
            writingMode: "vertical-rl",
            fontWeight: stress1 || stress2 ? "bold" : "normal",
            color: stress1 ? "red" : "black",
            textShadow: stress1
              ? "yellow 1px 0 8px"
              : stress2
              ? "skyblue 1px 0 8px"
              : "none",
            fontSize: fontsize,
          }}
        >
          {name}
        </p>
      )}
      <div
        style={{
          position: "absolute",
          top: top + 2,
          left: left - 10,
          fontSize: 15,
          lineHeight: 1,
        }}
      >
        {stationNumber.map((i) => (
          <p
            style={{
              backgroundColor:
                i.slice(0, 2) === "TY"
                  ? "red"
                  : i.slice(0, 2) === "TM"
                  ? "brown"
                  : i[0] === "D"
                  ? "mediumaquamarine"
                  : i[0] === "I"
                  ? "palevioletred"
                  : i.slice(0, 2) === "MG"
                  ? "skyblue"
                  : i.slice(0, 2) === "MM"
                  ? "blue"
                  : i[0] === "K"
                  ? "darkblue"
                  : i[0] === "O"
                  ? "orange"
                  : "yellow",
              color: "white",
              margin: 0,
              marginBottom: "1px",
              textShadow: "black 1px 1px",
              transform: `rotateX(${display ? 0 : 90}deg)`,
              transition: "0.4s",
              opacity: `${display ? 1 : 0}`,
            }}
          >
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};
