import {beforeEach,expect,it,vi} from 'vitest'
import {fireEvent,render,screen} from '@testing-library/react'
import App from './App'
import {KEY,initial} from './state'
beforeEach(()=>{localStorage.clear()})
it('requires confirmation before clearing recipe progress',()=>{localStorage.setItem(KEY,JSON.stringify({...initial,started:true,screen:'completion',completed:true,step:4}));const confirm=vi.spyOn(window,'confirm').mockReturnValue(false);render(<App/>);fireEvent.click(screen.getByRole('button',{name:/Приготовить ещё раз/}));expect(confirm).toHaveBeenCalledOnce();expect(screen.getByRole('heading',{name:/Bon/})).toBeTruthy();confirm.mockRestore()})
