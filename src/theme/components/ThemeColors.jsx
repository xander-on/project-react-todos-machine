import { ThemeColorItem } from "./";

export const ThemeColors = () => {
    

    const themeColors = [ 
        {
            name: 'red',
            color: 'rgb(206, 5, 5)'
        },

        {
            name: 'blue',
            color: 'rgb(0, 42, 156)'
        },

        {
            name: 'yellow',
            color: 'rgb(214, 214, 0)'
        },

        {
            name: 'pink',
            color: 'rgb(235, 136, 152)'
        },

        {
            name: 'green',
            color: 'rgb(67, 182, 0)'
        },
    ];


    return (
        <>
            <div className="theme-color-container">
                <h4 className="subtitle">Color del tema:</h4>
                <div className="colors-container">
                    {
                        themeColors.map( color => 
                            <ThemeColorItem 
                                key      = { color.name } 
                                color    = { color }
                            />
                        )
                    }
                </div>
           
            </div>
        </>
    );
}
