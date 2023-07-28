import React from 'react';
import {   CellTemplate,
    Cell,
    Compatible,
    Uncertain,
    UncertainCompatible,
    isNavigationKey,
    getCellProperty,
    isAlphaNumericKey,
    keyCodes,
    TextCell
} from '@silevis/reactgrid';


type Props = {
    onCellChanged: (cell: Compatible<TextCell>, commit: boolean) => void,
    cell: Compatible<TextCell>,
    isInEditMode: boolean,
}

// 커스텀 텍스트 셀 렌더러
const CustomTextCellRenderer: React.FC<Props> = ({onCellChanged, cell,} : Props) => {

    const getCompatibleCell = (uncertainCell: Uncertain<TextCell>): Compatible<TextCell> =>{
        const text = getCellProperty(uncertainCell, "text", "string");
        const value = parseFloat(text);
        return { ...uncertainCell, text, value };
    }
    
    const  handleKeyDown = (
        cell: Compatible<TextCell>,
        keyCode: number,
        ctrl: boolean,
        shift: boolean,
        alt: boolean
      ): { cell: Compatible<TextCell>; enableEditMode: boolean } => {
        if (!ctrl && !alt && isAlphaNumericKey(keyCode))
          return { cell, enableEditMode: true };
        return {
          cell,
          enableEditMode: keyCode === keyCodes.POINTER || keyCode === keyCodes.ENTER
        };
      }
    
    const   update = (
        cell: Compatible<TextCell>,
        cellToMerge: UncertainCompatible<TextCell>
    ): Compatible<TextCell> => {
    return getCompatibleCell({ ...cell, text: cellToMerge.text });
    }

    

    return (
        <input
            ref={(input) => {
            input && input.focus();
            }}
            defaultValue={cell.text}
            onChange={(e) =>
            onCellChanged(
                getCompatibleCell({ ...cell, text: e.currentTarget.value }),
                false
            )
            }
            onCopy={(e) => e.stopPropagation()}
            onCut={(e) => e.stopPropagation()}
            onPaste={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
            if (isAlphaNumericKey(e.keyCode) || isNavigationKey(e.keyCode))
                e.stopPropagation();
            }}
        />
        
    );
};

export default CustomTextCellRenderer;

