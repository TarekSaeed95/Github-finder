import React from 'react'
import RepoItem from './RepoItem'
function ReposList({repos}) {
    const repoElement= repos.map(
        repo=> (<RepoItem key={repo.id} repo={repo}/>))
  return  (
    <div className="container card shadow-2xl mt-8">
        <div className="card-body">

        <div className="card-title">

    <h2>Latest Repos</h2>
        </div>
        {repoElement}
        </div>
</div>
    )
}

export default ReposList