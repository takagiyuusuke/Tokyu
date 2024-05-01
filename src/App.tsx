import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { stations } from "./stations";
import { Station } from "./station";
import { cost, times } from "./times";
import { position, pos, array } from "./position";
import { Linebox } from "./line";
import { Button } from "./components/utils/button";
import { TextField } from "./components/utils/input";
import { dividerClasses } from "@mui/material";

function App() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [can, setCan] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [vias, setVias] = useState<number[]>([]);
  const [dep, setDep] = useState<number>(0);
  const [ter, setTer] = useState<number>(0);
  const [candidate, setCandidate] = useState<(string | number | string[])[][]>(
    []
  );
  const [candidate2, setCandidate2] = useState<
    (string | number | string[])[][]
  >([]);
  const [iterable, setIterable] = useState<number[]>([]);

  useEffect(() => {
    if (dep !== 0 && ter !== 0) {
      const templist = cost(dep, ter);
      setTime(templist[0] as number);
      setVias(templist[1] as number[]);
      let t: number[] = [];
      for (let i = 0; i < (templist[1] as number[]).length - 1; i++) {
        t.push(i);
      }
      setIterable(t);
    }
  }, [dep, ter]);

  useEffect(() => {
    if (candidate.length === 0 || !a) setCan(0);
  }, [candidate]);
  useEffect(() => {
    if (candidate2.length === 0 || !b) setCan(0);
  }, [candidate2]);

  return (
    <div className="App">
      <div>
        <div className="line" style={{ height: "5px" }}></div>
        <div className="line2" style={{ height: "5px" }}></div>
        <div className="line3" style={{ height: "5px" }}></div>
        <div className="line4" style={{ height: "5px" }}></div>
        <div className="line5" style={{ height: "5px" }}></div>
        <div className="line6" style={{ height: "5px" }}></div>
        <div className="line7" style={{ height: "5px" }}></div>
        <div className="line8" style={{ height: "5px" }}></div>
        <div className="line9" style={{ height: "5px" }}></div>
        <div className="line10" style={{ height: "5px" }}></div>
        <div className="line11" style={{ height: "5px" }}></div>
        <div className="line12" style={{ height: "5px" }}></div>
        <div className="line13" style={{ height: "5px" }}></div>
        <div className="line14" style={{ height: "5px" }}></div>
        <div className="line15" style={{ height: "5px" }}></div>
        <div className="line16" style={{ height: "5px" }}></div>
        <div className="line17" style={{ height: "5px" }}></div>
        <div className="line18" style={{ height: "5px" }}></div>
        <div className="line19" style={{ height: "5px" }}></div>
        <div className="line20" style={{ height: "5px" }}></div>
        <div className="line21" style={{ height: "5px" }}></div>
      </div>

      {iterable.map((i) => (
        <Linebox
          top1={position[vias[i] - 1][0]}
          top2={position[vias[i + 1] - 1][0]}
          left1={position[vias[i] - 1][1]}
          left2={position[vias[i + 1] - 1][1]}
          time={
            (
              times[vias[i] - 1].filter(
                (e) => (e as number[])[0] === vias[i + 1]
              )[0] as number[]
            )[1]
          }
        ></Linebox>
      ))}

      {array.map((i) => (
        <Station
          stress1={[can, dep, ter].includes(i)}
          stress2={vias.includes(i)}
          top={position[i - 1][0]}
          left={position[i - 1][1]}
          name={stations[i - 1][1] as string}
          pos={pos[i - 1]}
          stationNumber={stations[i - 1][3] as string[]}
        />
      ))}
      <div className="header">
        <div className="depbox" style={{ backgroundColor: "skyblue" }}>
          <h4 className="dep">出発駅</h4>
          <TextField
            label="出発駅"
            onChange={(e) => {
              setA(e.target.value);
              setCandidate(
                stations.filter(
                  (f) =>
                    (f[1] as string).startsWith(
                      e.target.value.replace(/[ｂ-ｚ]/g, "")
                    ) ||
                    (f[2] as string).startsWith(
                      e.target.value.replace(/[ｂ-ｚ]/g, "")
                    )
                )
              );
            }}
            value={a}
            width="222px"
            height="35px"
          ></TextField>
          {a && candidate.length !== 0 && candidate.length <= 5 && (
            <div className="dep">
              もしかして
              {candidate.map((e) => (
                <Button
                  key={e[0] as string}
                  onMouseEnter={() => setCan(e[0] as number)}
                  onMouseLeave={() => setCan(0)}
                  color="primary"
                  onClick={() => {
                    setDep(e[0] as number);
                    setA(e[1] as string);
                    setCandidate([]);
                  }}
                >
                  {e[1]}
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className="depbox" style={{ backgroundColor: "pink" }}>
          <h3 className="dep">到着駅</h3>
          <TextField
            label="到着駅"
            onChange={(e) => {
              setB(e.target.value);
              setCandidate2(
                stations.filter(
                  (f) =>
                    (f[1] as string).startsWith(
                      e.target.value.replace(/[ｂ-ｚ]/g, "")
                    ) ||
                    (f[2] as string).startsWith(
                      e.target.value.replace(/[ｂ-ｚ]/g, "")
                    )
                )
              );
            }}
            value={b}
            width="222px"
            height="35px"
          ></TextField>
          {b && candidate2.length !== 0 && candidate2.length <= 5 && (
            <div className="dep">
              もしかして
              {candidate2.map((e) => (
                <Button
                  key={e[0] as string}
                  onMouseEnter={() => setCan(e[0] as number)}
                  onMouseLeave={() => setCan(0)}
                  color="error"
                  onClick={() => {
                    setTer(e[0] as number);
                    setB(e[1] as string);
                    setCandidate2([]);
                  }}
                >
                  {e[1]}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ position: "absolute", top: 260, left: 20, width: 900 }}>
        {dep && ter ? (
          <div>
            <h2>
              {stations[dep - 1][1]}→{stations[ter - 1][1]}{" "}
              <span style={{ fontSize: 15 }}>所要時間</span>
              {time}分
            </h2>
            <h5>経由: {vias.map((e) => stations[e - 1][1]).join(" → ")}</h5>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
