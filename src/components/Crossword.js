import crossword from '../crossword';

const styles = {
    grid: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
    }
};

const Crossword = () => {
    return (
        <div className="grid" style={styles.grid}>{
            crossword.map(obj => {
                return <div style={{ gridColumn: obj.gridY.join(' / '), gridRow: obj.gridX.join(' / ') }}>{obj.answer}</div>
            })
        }</div>
    );
};

export default Crossword;
