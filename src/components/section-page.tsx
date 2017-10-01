import * as React from 'react';
import classNames from 'classnames';

export function SectionPage({children = undefined, className = ''}){
    const mainClass = classNames(
        className.toString(),
        'o-grid',
      );
      const innerClass = classNames(
        'o-grid__cell',
      );

      return (
        <section className = {mainClass}>
            <div className = {innerClass}> {children} </div>
        </section>
      );

}