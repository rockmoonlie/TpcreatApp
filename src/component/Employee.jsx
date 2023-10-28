function Employee(props){
    return(
        <div class="m-2 py-5 rounded-4 shadow-lg space-y-2 flex items-center">
            <img className="image object-fit-cover rounded-circle h-[100px] w-25  block mx-auto h-50  sm:mx-0 sm:shrink-0" src={props.img} />
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                     <p class="text-lg text-black font-semibold">{props.nom  }</p>
                     <p class="text-slate-500 font-medium">{props.référentiel}</p>
                </div>
                <button class="button">
                    Mettre à jour
                </button>
            </div>
        </div>
    )
}

export default Employee;