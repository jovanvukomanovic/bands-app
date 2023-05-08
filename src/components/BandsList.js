import React from 'react'
import Band from './Band'

export default function BandsList({bands, handleClick}) {


    const allBands = bands.map((band)=>{
        return(
            <div className="col-6" key={band.id}>
                <Band band={band} handleClick={handleClick}/>
            </div>

        )
    })
  return (
    <div>
        <div className="container-fluid offset-1">
            <div className="row">
                <div className="col-11 mt-3">
                    <div className="row">
                        {allBands}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
