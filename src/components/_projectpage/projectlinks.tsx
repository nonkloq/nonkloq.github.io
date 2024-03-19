import loadSvgSource from '@/lib/loadsvgsrc';
import Image from 'next/image';

export default function ProjectLinks(props: {
    links: {[key: string]: string;}
    classname: string
}) {
    return <div className={props.classname}>
                {Object.entries(props.links).map(([key, link]) => (
                    <a key={key} href={link} target="_blank">
                        <Image 
                            src={loadSvgSource(key)} 
                            alt={`${key}-svg`} 
                            width={16}
                            height={16}
                            priority={true}
                            />
                    </a>
                    ))}
            </div>
}