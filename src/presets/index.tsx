import React from 'react'
import { useGlobalStore } from '../services/globalStore'
import { usePresets } from '../services/querys'
import LabelValue from '../components/LabelValue'
import { GridR } from '../components/LayoutUtil'

const Presets = () => {
  const { searchString } = useGlobalStore()
  const { data } = usePresets()

  if (data.status !== 200)
    return (
      <h1>
        sem dados {data.status} - {data.resultsQty}
      </h1>
    )

  const dataFiltered =
    searchString === ''
      ? data.results
      : data.results.filter((x) =>
          Object.values(x).some((s) =>
            ('' + String(s)).toLowerCase().includes(searchString.toLowerCase())
          )
        ) || []

  return (
    <div>
      <div className="d-flex justify-content-between mb-2 ms-3 me-5">
        <div>Total de Presets: {data.resultsQty}</div>
        <span>Api status: {data.status} </span>
      </div>
      <div>
        {dataFiltered.map((x) => {
          return (
            <React.Fragment key={x.id}>
              <h6
                style={{ backgroundColor: 'var(--sitrad-color)' }}
                className="d-flex rounded p-2"
              >
                Nome: {x.name}
              </h6>
              <GridR>
                <LabelValue label="Id:"> {x.id} </LabelValue>
                <LabelValue label="Criado Em:"> {x.creationDate} </LabelValue>
                <LabelValue label="ModelId:"> {x.modelId} </LabelValue>
                <LabelValue label="ModelVersion:">{x.modelVersion}</LabelValue>
              </GridR>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Presets
