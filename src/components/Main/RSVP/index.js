import confetti from 'canvas-confetti';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useAsync } from '../../../hooks/useAsync';
import { useOnScreen } from '../../../hooks/useOnScreen';

const Form = () => {
    const [isAttending, setIsAttending] = useState(null);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isAllergiesSelected, setIsAllergiesSelected] = useState(false);
    const [isReligiousSelected, setIsReligiousSelected] = useState(false);
    const [isOtherSelected, setIsOtherSelected] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isNotChecked, setIsNotChecked] = useState(null);

    const [containerRef, isVisible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    });

    useLayoutEffect(() => {
        if (isVisible) {
            containerRef.current.classList.add('animate');
        } else {
            containerRef.current.classList.remove('animate');
        }
    }, [isVisible]);

    useEffect(() => {
        setIsCollapsed(!isAttending)

        if (isAttending) confetti();
    }, [isAttending]);

    function handleChange(e) {
        const target = e.target;
        const value = target.value;

        confetti({
            particleCount: 250,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            origin: {
                x: 0.5,
                y: 1,
            },
            colors: ['#E84FAA', '#FFE61A', '#FF5643', '#1C9BD8', '#07BDA7'],
            shapes: ['circle', 'square'],
            scalar: 1,
            zIndex: 100,
            disableForReducedMotion: true,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (e.currentTarget.querySelectorAll('[name="isAttending"]')[0].checked ||
            e.currentTarget.querySelectorAll('[name="isAttending"]')[1].checked) {
            setIsNotChecked(false);
        } else {
            setIsNotChecked(true);
            return;
        }

        setIsSubmitting(true);

        let dietaryRequirements = [];

        e.currentTarget.querySelectorAll('[name^="diet"]').forEach(input => {
            if (input.checked) dietaryRequirements.push(input.value);
        });

        const data = new FormData();
        data.append('firstName', e.currentTarget.firstName.value);
        data.append('lastName', e.currentTarget.lastName.value);
        data.append('email', e.currentTarget.email.value);
        data.append('isAttending', e.currentTarget.isAttending.value);
        data.append('phone', e.currentTarget?.phone?.value);
        data.append('song', e.currentTarget?.song?.value);
        data.append('diet', dietaryRequirements);
        data.append('dietOther', e.currentTarget?.dietOther?.value);

        const options = {
            method: "POST",
            body: data,
            redirect: "follow"
        };

        fetch('https://www.stephenandkiana.wedding/php/testmail.php', options)
            .then(response => response.json())
            .then(response => {
                if (response === 200) {
                    setSuccess(true);
                } else {
                    setSuccess(false);
                }
            })
            .catch(error => console.error(error))
            .finally(setIsSubmitting(false));
    };

    return (
        <section id="rsvp">
            <div className="center fade-in" ref={containerRef}>
                <h2>RSVP</h2>
                <form onSubmit={handleSubmit} className={isSubmitting || success ? "stack submitting" : "stack"} disabled={isSubmitting}>
                    <fieldset className="switcher">
                        <label>First name
                            <input name="firstName" autoComplete="given-name" required />
                        </label>

                        <label>Last name
                            <input name="lastName" autoComplete="family-name" required />
                        </label>

                        <p className="error">This is where any errors will show up.</p>
                    </fieldset>

                    <fieldset className="">
                        <label>Email
                            <input name="email" autoComplete="email" type="email" required />
                        </label>

                        <p className="error">This is where any errors will show up.</p>
                    </fieldset>

                    <fieldset className="">
                        <legend>Are you able to attend?</legend>

                        <div className="switcher" style={{ '--space': '0' }}>
                            <label>Yes
                                <input name="isAttending" type="radio" value={true} onChange={() => setIsAttending(true)} />
                            </label>

                            <label>No
                                <input name="isAttending" type="radio" value={false} onClick={() => setIsAttending(false)} />
                            </label>
                        </div>

                        {isNotChecked && isAttending === null && <p style={{ marginBlockStart: '0.5rem' }}>Please let us know if you&rsquo;re able to attend!</p>}
                    </fieldset>

                    <fieldset className="switcher" data-collapsed={isCollapsed}>
                        <label>Phone
                            <input name="phone" autoComplete="tel-national" type="tel" title="We&rsquo;re only asking for this to send you something fun on the day &mdash; no one except us will see this!" />
                        </label>

                        <label>Song request
                            <input name="song" />
                        </label>

                        <p className="error">This is where any errors will show up.</p>
                    </fieldset>

                    <fieldset className="cluster" data-collapsed={isCollapsed}>
                        <legend>Dietary requirements</legend>

                        <label>Dairy-free
                            <input name="diet[]" type="checkbox" value="Dairy-free" />
                        </label>

                        <label>Gluten-free
                            <input name="diet[]" type="checkbox" value="Gluten-free" />
                        </label>

                        <label>Vegan
                            <input name="diet[]" type="checkbox" value="Vegan" />
                        </label>

                        <label>Vegetarian
                            <input name="diet[]" type="checkbox" value="Vegetarian" />
                        </label>

                        <label>Food allergies
                            <input name="diet[]" type="checkbox" value="Allergies" onChange={() => setIsAllergiesSelected(!isAllergiesSelected)} />
                        </label>

                        <label>Religious restrictions
                            <input name="diet[]" type="checkbox" value="Religious" onChange={() => setIsReligiousSelected(!isReligiousSelected)} />
                        </label>

                        <label>Other
                            <input name="diet[]" type="checkbox" value="Other" onChange={() => setIsOtherSelected(!isOtherSelected)} />
                        </label>
                    </fieldset>

                    {isAttending && (
                        <fieldset className="" data-collapsed={!isAllergiesSelected && !isReligiousSelected && !isOtherSelected}>
                            <label>Tell us more about your dietary requirements
                                <input name="dietOther" />
                            </label>
                        </fieldset>
                    )}

                    <fieldset className="" data-collapsed={isCollapsed}>
                        <legend>Will you be joining us for Friday&rsquo;s and/or Sunday&rsquo;s events?</legend>

                        <div className="switcher" style={{ '--space': '0' }}>
                            <label htmlFor="friday">Friday
                                <input id="friday" name="eventParticipation" type="radio" value="friday" />
                            </label>

                            <label htmlFor="sunday">Sunday
                                <input id="sunday" name="eventParticipation" type="radio" value="sunday" />
                            </label>

                            <label htmlFor="both">Both
                                <input id="both" name="eventParticipation" type="radio" value="both" />
                            </label>

                            <label htmlFor="neither">Neither
                                <input id="neither" name="eventParticipation" type="radio" value="neither" />
                            </label>
                        </div>

                        <p className="error">This is where any errors will show up.</p>
                    </fieldset>

                    <fieldset style={{ marginBlockStart: '3rem' }}>
                        <button type="submit" enterKeyHint="send" disabled={isSubmitting} hidden={success}>
                            <span className="with-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                Send
                            </span>
                        </button>
                        {success && <p>Thanks for replying! We've got your email.</p>}
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default Form;
