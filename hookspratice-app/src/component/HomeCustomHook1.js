import useFatch from "./FatchCustomHook2";
export default function Home(){
    const[data] = useFatch("https://dummyjson.com/products")
    console.log(data)
    return(
        <div>
            {/* {data && data.map((item)=>{
                return <p key={item.id}>{item.title}</p>;
            })} */}
        </div>
    )
}


