interface Props {
    top1: number;
    left1: number;
    top2: number;
    left2: number;
    time: number;
    color?: string;
    stress?: boolean;
}

export const Linebox: React.FC<Props> = ({
    top1,left1,top2,left2,time,stress=false,color
}) => {
    const t3 = (top1+top2)/2+5;
    const l3 = (left1+left2)/2+9;
    const len = Math.sqrt((top1-top2)*(top1-top2)+(left1-left2)*(left1-left2));
    const degree = Math.atan((top1-top2)/(left1-left2))*180/Math.PI;
    const minl = l3-len/2

    color = 'rgba(0,0,0,0.5)'

    return (
        <div>
            <div 
            style={{position: 'absolute', height: 10, top: t3, left: minl, width: len, backgroundColor: color, transform: `rotate(${degree}deg)`}}
            ></div>
            <p style={{position:'absolute', top: t3-18, left: l3-4, fontSize: 13, color:'white', textShadow:'purple 1px 0 3px'}}>{time}</p>
        </div>
        
    )
}

