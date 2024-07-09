import Repo from '../repo';
import datas from '../../../data.js';

const dataItems = datas.items;
// console.log(dataItems);
const RepoList = () => {
    return (
        <div className='container'>
            {
                dataItems.map((item) => {
                    return (
                        <Repo
                            key={item.id}
                            name={item.name}
                            url={item.html_url}
                            avatar_url={item.owner.avatar_url}
                            owner={item.owner.login}
                            description={item.description}
                        />
                    )
                })
            }
        </div>)
}

export default RepoList;