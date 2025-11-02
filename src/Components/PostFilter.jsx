import AppInput from "./UI/input/AppInput"
import AppSelect from "./UI/select/AppSelect"

const PostFilter = ({ filter, setFilter }) => {

    const sorts = [
        { name: 'Sort by name', value: 'title' },
        { name: 'Sort by description', value: 'description' },
    ];

    return (
        <>
            <AppInput
                placeholder={"Search..."}
                value={filter.query}
                onChange={event => setFilter({ ...filter, query: event.target.value })}
            />

            <AppSelect
                onChange={(value) => setFilter({ ...filter, sort: value })}
                value={filter.sort}
                defaultValue={"Sort by"}
                options={sorts}
            />
        </>
    )
}

export default PostFilter