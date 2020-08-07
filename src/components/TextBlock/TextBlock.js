import React from 'react';
import Grid from '@material-ui/core/Grid'
import './TextBlock.scss'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const TextBlock = ({ statement, header, list, body }) => (
    <Grid container className={`text-block-container ${statement && "statement-container"}`}>
        <MaxWidthWrapper>
            <Grid container className="text-block-inner">
                <Grid item xs={0} sm={6} className="spacer">
                </Grid>
                <Grid item xs={12} sm={6} className="text-item">
                    {header && <div className="header">{header}</div>}
                    {list &&
                        <ul className="list">
                            {list.map((l) =>
                                <li>{l}</li>
                            )} 
                        </ul>
                    }
                    <div className="body">{body}</div>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default TextBlock;