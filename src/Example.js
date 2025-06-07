import React, { useState } from 'react';

export default function GradeCalculator() {
    const [quiz, setQuiz] = useState('');
    const [lab, setLab] = useState('');
    const [exam, setExam] = useState('');
    const [overallGrade, setOverallGrade] = useState(null);
    const [pointScale, setPointScale] = useState(null);

    const calculateGrade = () => {
        const q = parseFloat(quiz);
        const l = parseFloat(lab);
        const e = parseFloat(exam);

        if (isNaN(q) || isNaN(l) || isNaN(e)) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        const finalGrade = (q * 0.3) + (l * 0.3) + (e * 0.4);
        setOverallGrade(finalGrade.toFixed(2));
        setPointScale(convertTo4PointScale(finalGrade));
    };

    const convertTo4PointScale = (grade) => {
        if (grade <= 74.5) return 0;
        if (grade <= 76.5) return 1;
        if (grade <= 78.5) return 1.25;
        if (grade <= 80.5) return 1.5;
        if (grade <= 82.5) return 1.75;
        if (grade <= 84.5) return 2;
        if (grade <= 86.5) return 2.25;
        if (grade <= 88.5) return 2.5;
        if (grade <= 90.5) return 2.75;
        if (grade <= 92.5) return 3;
        if (grade <= 94.5) return 3.25;
        if (grade <= 96.5) return 3.5;
        if (grade <= 98.5) return 3.75;
        if (grade <= 100) return 4;
        return 'Invalid';
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            
            <h2>Grade Calculator</h2>
            <p>Grades: 
            <input
                type="number"
                placeholder="Quiz Score"
                value={quiz}
                onChange={(e) => setQuiz(e.target.value)}
            /><br /><br />
            </p>
            <p>Lab Activities:
            <input
                type="number"
                placeholder="Lab Activity Score"
                value={lab}
                onChange={(e) => setLab(e.target.value)}
            /><br /><br />
            </p>
            <p>Final Exam :
            <input
                type="number"
                placeholder="Final Exam Score"
                value={exam}
                onChange={(e) => setExam(e.target.value)}
            /><br /><br />
            </p>
            <button onClick={calculateGrade}>Submit</button>

            {overallGrade !== null && (
                <div style={{ marginTop: '20px' }}>
                    <p><strong>Grades:</strong> {overallGrade}</p>
                    <p><strong>Final Grades:</strong> {pointScale.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}
