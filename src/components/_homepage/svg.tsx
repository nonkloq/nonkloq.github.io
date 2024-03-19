import loadSvg from "@/lib/loadsvg";

export default function SVGDiv(props: {
    svgName: string
    classname: string
}) {
    
    const svg = loadSvg(props.svgName);

    return <div 
    className={props.classname}
    dangerouslySetInnerHTML={{ __html: svg}}
    
    />

    
}
