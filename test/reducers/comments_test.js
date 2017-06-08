import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer',()=>{
    it('handles action with unknown type',()=>{
        //expect(commentReducer()).to.be.instanceOf(Array);//чи те що поверне редусер масив
        expect(commentReducer(undefined, {})).to.eql([]);// чи кожне значення правого рівне лівому
    });

    it('handles action of type SAVE_COMMENT',()=>{
        const action = {type : SAVE_COMMENT, payload: 'NEW COMMENT'};
        expect(commentReducer([],action)).to.eql(['NEW COMMENT']);
    });
    
});