import styled from 'styled-components';


const Button = styled.button`
    font-size:${p => p.theme.fontSizes.m};
    padding:4px 12px;
    border-radius:${p => p.theme.radii.normal};
    background-color:inherit;
    cursor:pointer;
    text-transform: capitalize;
    :not(:last-child){margin-right:${p => p.theme.space[4]}px};
    :hover,focus{
        background-color:${p => p.theme.colors.darkGrey};
    }
`;

export const FeedbackControls = ({ FeedbackCounter }) => {
   return (<div>
    <Button type="button" name="good" onClick={FeedbackCounter}>good</Button>
    <Button type="button" name="neutral" onClick={FeedbackCounter}>neutral</Button>
    <Button type="button" name="bad" onClick={FeedbackCounter}>bad</Button>
</div>    )
}





