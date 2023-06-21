import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsPlusLg } from "react-icons/bs";
import { BiExpand } from "react-icons/bi";
import { BiCollapse } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";


// import {MdZoomOutMap} from 'react-icons'
import Country from './components/Country'



const App=()=> {
  const [id, setId] =useState();
  const [name, setName] =useState();
  const [resident, setResident] = useState();
  //const [];

  const [countries, setCountries] = useState([
    {
      id: 1,
      name: "Indonesia",
      resident: 273879750 
    },
    {
      id: 2,
      name: "Jepang",
      resident: 124095000 
    },
    {
      id: 3,
      name: "Vietnam",
      resident: 100035000 
    },
  ])

  const tambahDepan =()=>{
    setCountries([{id: id, name: name, resident: resident},...countries])

  }

  const tambahBelakang =()=>{
    setCountries([...countries,{id: id, name: name, resident: resident}]);
  }

  const perbesar = () =>{
    setCountries(countries.map((shap) =>{
        if(shap.id == id){
            return{
                ...shap,
                resident : shap.resident+50
            }
        }else{
                return shap
            }
    }))
  }
  const perkecil = () =>{
    setCountries(countries.map((shap) =>{
      if(shap.id == id){
          return{
              ...shap,
              resident : shap.resident-50
          }
      }else{
              return shap
          }
  }))
  }

  //Simpan perubahan Edit
  function simpan(){
    const count = countries.map((e)=> {
      if(e.id === id){
        return {
          ...e,
          name:name
        }
      }else{
        return e
      }
    })
    setCountries(count)
  }

  const hapusDepan =()=>{
    setCountries(countries.slice(1));
  }

  const hapusById =()=>{
    setCountries(countries.filter(x => x.id !== id))
  }

  const hapusBelakang=()=>{
    setCountries(countries.slice(0, -1));
  }

  const hapusSemua =()=>{
    setCountries([]);
  }
  return (
    <>
    <div className='box'>
      {/* TAMPILKAN DATA */}
      <div>
        {
          countries.map((country) => {
            return(
              <Country key={country.id} id={country.id} name={country.name} resident={country.resident}/> 
            )
          })
        }
      </div>
      {/* TAMBAH DATA */}
      <div className='card'>
        <div className='cardAdd'>
        <input type='number' value={id} onChange={(e) => setId(parseInt(e.target.value))}placeholder = "id"/>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama negara"/>
          <input type='text' value={resident} onChange={(e) => setResident(parseInt(e.target.value))} placeholder="Jumlah penduduk"/>
          <div className='addBtn'>
            <button onClick={tambahDepan }><BsPlusLg/>  Tambah Depan</button>
            <button onClick={tambahBelakang}><BsPlusLg/>  Tambah Belakang</button>
          </div>
        </div>
      {/* </div> */}

      {/* UPDATE DATA */}
      <div className='cardUpdate'>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} placeholder ="Id"/>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama negara"/>
        <div className='cardBtn'>
          <button onClick={perbesar}><BiExpand size={20}/>  Perbesar</button>
          <button onClick={perkecil}><BiCollapse size={20}/>  Perkecil</button>
          <button onClick={simpan}><BiArchiveIn size={20}/>  Simpan perubahan</button>
          <button onClick={hapusById}><AiFillDelete size={20}/>  Hapus</button>
        </div>
      </div>
      </div>


      <div className='card'>
          <div className='db'>
            <button onClick={hapusDepan}><AiFillDelete size={20}/>  Hapus depan</button>
            <button onClick={hapusBelakang}><AiFillDelete size={20}/>  Hapus Belakang</button>
          </div>
          <div className='all'> 
            <button onClick={hapusSemua}><AiFillDelete size={20}/>  Hapus semua</button>
          </div>
      </div>
    
    </div>
    </>
  )
}

export default App
