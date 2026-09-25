'use client';

import { useState } from 'react';
import { Dumbbell, Activity, Flame, Droplet, ArrowRight } from 'lucide-react';

interface FitnessCalculatorProps {
  onOpenBookModal: (service?: string) => void;
}

export default function FitnessCalculator({ onOpenBookModal }: FitnessCalculatorProps) {
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(72);
  const [activityLevel, setActivityLevel] = useState<string>('moderate');

  // BMI = kg / (m * m)
  const heightInMeters = heightCm / 100;
  const bmi =
    heightInMeters > 0
      ? Number((weightKg / (heightInMeters * heightInMeters)).toFixed(1))
      : 0;

  let bmiCategory = 'Normal Weight';
  let categoryColor = 'text-emerald-400';
  let recommendedDiscipline = 'CrossFit & Weight Training';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight (Hypertrophy focus)';
    categoryColor = 'text-amber-400';
    recommendedDiscipline = 'Weight Training & Nutrition Consulting';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = 'Optimal Fitness Zone';
    categoryColor = 'text-emerald-400';
    recommendedDiscipline = 'CrossFit, Cycling & Strength';
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Overweight (Body recomposition)';
    categoryColor = 'text-amber-400';
    recommendedDiscipline = 'CrossFit, Cycling & Nutrition Consulting';
  } else {
    bmiCategory = 'High BMI (Supervised conditioning)';
    categoryColor = 'text-rose-400';
    recommendedDiscipline = 'Personal Training & Nutrition Consulting';
  }

  // Recommended daily water intake roughly: 35ml per kg
  const waterLitres = (weightKg * 0.035).toFixed(1);
  // Estimated daily protein target: 1.6g to 2.0g per kg for active gym goers
  const proteinGrams = Math.round(weightKg * 1.8);

  return (
    <section className="py-20 lg:py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Interactive Body Health Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
            Calculate Your Baseline Metrics
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Get an instant baseline of your Body Mass Index (BMI), daily protein needs, and targeted training discipline recommendations before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800">
            <div className="space-y-6">
              
              {/* Height slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Height (cm)
                  </label>
                  <span className="text-lg font-black text-amber-400 font-mono">
                    {heightCm} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="215"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>130 cm</span>
                  <span>170 cm</span>
                  <span>215 cm</span>
                </div>
              </div>

              {/* Weight slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Body Weight (kg)
                  </label>
                  <span className="text-lg font-black text-amber-400 font-mono">
                    {weightKg} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                  <span>40 kg</span>
                  <span>100 kg</span>
                  <span>160 kg</span>
                </div>
              </div>

              {/* Activity Level Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  Training Frequency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'beginner', label: '1–2 days/wk' },
                    { id: 'moderate', label: '3–4 days/wk' },
                    { id: 'intense', label: '5+ days/wk' },
                  ].map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setActivityLevel(level.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                        activityLevel === level.id
                          ? 'bg-amber-400 text-zinc-950 font-bold'
                          : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                Calculated Breakdown
              </span>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-5xl font-black text-white">{bmi}</span>
                <span className="text-xs uppercase text-zinc-500 font-bold">BMI Score</span>
                <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded bg-zinc-950 ${categoryColor}`}>
                  {bmiCategory}
                </span>
              </div>

              {/* Targets grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>Daily Protein Target</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">
                    ~{proteinGrams}g <span className="text-xs text-zinc-500 font-normal">/ day</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Droplet className="w-4 h-4 text-sky-400" />
                    <span>Daily Hydration</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">
                    ~{waterLitres} L <span className="text-xs text-zinc-500 font-normal">/ day</span>
                  </div>
                </div>
              </div>

              {/* Recommended Discipline */}
              <div className="mt-5 p-4 rounded-2xl bg-zinc-950/80 border border-amber-400/20">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Recommended Revive Discipline
                </div>
                <div className="text-base font-bold text-white mt-1">
                  {recommendedDiscipline}
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Based on your body parameters, our coaches in Seawoods recommend combining progressive strength with coached interval conditioning.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800">
              <button
                onClick={() => onOpenBookModal('Personal Training')}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
              >
                <span>Get Coach Review at Revive</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
