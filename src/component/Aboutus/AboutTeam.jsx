import React from 'react'
import './StyleAbout.css'
import { Link } from 'react-router-dom'
import { TeamList } from './TeamList';


function AboutTeam() {
    const RenderTeam = (item, index) => {
        return (
            <>
                <div className="col">
                    <div className="card radius-15">
                        <div className="card-body text-center">
                            <div className="p-4 border radius-15">
                                <img src={item.gambar} width="110" height="110" className="rounded-circle shadow" alt="" />
                                <h5 className="mb-0 mt-5">{item.nama}</h5>
                                <p className="mb-3">{item.posisi}</p>
                                <div className="list-inline contacts-social mt-3 mb-3"> 
                                    <Link to="" href="https://www.youtube.com/watch?v=58RRl1JTJvY:;" className="list-inline-item bg-facebook text-white border-0">{item.facebook}</Link >
                                    <Link to="" className="list-inline-item bg-github text-white border-0">{item.github} </Link >
                                    <Link to="" className="list-inline-item bg-linkedin text-white border-0">{item.linkedin}</Link >
                                </div>
                                <div className="d-grid"> <Link to="" href="#" className="btn btn-outline-primary radius-15">Contact Me</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="container">
                <h4>Ngiung Team Project</h4>
                <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-xl-3">
                    {TeamList.map(RenderTeam)}
                </div>
            </div>
        </>
    )
}

export default AboutTeam    