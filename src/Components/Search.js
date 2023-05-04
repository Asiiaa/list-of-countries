import { Input } from '@mui/material';

function Search({searchValue, setSearchValue}) {
  return (
    <div className='input'>
        <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder='...'></Input>
    </div>
  )
}

export default Search