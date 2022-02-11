import {useEffect, useState} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros contenedor sombra'>
        <form>
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={e=>setFiltro(e.target.value)}
                >
                        <option value="">-- Todas las categorias --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="pasatiempo">Pasatiempos</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros