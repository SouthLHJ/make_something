

/**
 * 
 * @param {Element} title 
 * @param {Array} list 
 * @param {Function} handleRowClick 
 * @param {Component} Content 
 * @returns 
 */
const List = ({title, list, handleRowClick, Component})=>{



    return (
        <div className="flexBox dir_column">
            <div className="files_theme_container">
                {title}
            </div>

            <div className="flexBox dir_column scroll_contents">
                {
                    _.isEmpty(list) ?

                        <div style={{ width: "100%" }}>
                            <span className={`file_once_canvas_preview_image `} style={{ cursor: "default" }}>
                                <span>
                                </span>
                            </span>
                        </div>
                        :
                        list.map((item, index) =>
                            <div style={{ width: "100%" }} onClick={() => handleRowClick(item)}>
                                <Component item={item} index={index}/>
                            </div>
                        )}

            </div>
        
        </div>
    )
}

export default List;