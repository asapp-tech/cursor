"use client";

import * as React from "react";
import { Modal } from "@/components/Modal";
import { skillGroups, skillLevels, type SkillLevel } from "@/lib/userFormConfig";
import {
  Checkbox,
  PrimaryButton,
  RadioPill,
  SecondaryButton,
  Select,
  Stars,
  TextArea,
  TextInput
} from "@/components/ui";

type PermissionsState = {
  admin: boolean;
  user: boolean;
  hrValidation: boolean;
};

type SkillState = Record<
  string,
  {
    checked: boolean;
    level: SkillLevel;
  }
>;

type Availability = "Disponible" | "Occupé(e)" | "Absent(e)";

function buildDefaultSkillState(): SkillState {
  const s: SkillState = {};
  for (const group of skillGroups) {
    for (const skill of group.skills) {
      s[skill.id] = {
        checked: Boolean(skill.defaultChecked),
        level: skill.defaultLevel ?? "N.A"
      };
    }
  }
  return s;
}

export function UserEditorModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [permissions, setPermissions] = React.useState<PermissionsState>({
    admin: false,
    user: false,
    hrValidation: false
  });

  const [availability, setAvailability] = React.useState<Availability>("Disponible");
  const [skills, setSkills] = React.useState<SkillState>(() => buildDefaultSkillState());

  const onSave = () => {
    // Placeholder: you can wire this to an API route later.
    // Keeping it as a no-op so the UI is production-ready but not opinionated about backend.
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add & Edit User"
      footer={
        <>
          <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
          <PrimaryButton onClick={onSave}>Save</PrimaryButton>
        </>
      }
    >
      <div className="space-y-5">
        {/* Top form fields */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TextInput label="User ID" requiredMark placeholder="User ID" />
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />

          <TextInput label="First Name" requiredMark placeholder="First Name" />
          <TextInput label="Last Name" requiredMark placeholder="Last Name" />
          <div className="hidden lg:block" />

          <TextInput label="Email ID" requiredMark placeholder="Email" type="email" />
          <TextInput label="Mobile No" placeholder="Mobile No" />
          <Select label="Localisation" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option value="FR">France</option>
            <option value="UK">United Kingdom</option>
            <option value="US">United States</option>
            <option value="MA">Morocco</option>
          </Select>

          <TextInput label="Password" requiredMark placeholder="Password" type="password" />
          <TextInput label="Teams link" placeholder="Teams link" type="url" />
          <TextInput label="Linkedin link" placeholder="LinkedIn link" type="url" />

          <TextInput label="Confirm Password" requiredMark placeholder="Confirm Password" type="password" />
          <TextInput label="Internal directory link" placeholder="Internal directory link" type="url" />
          <TextArea label="Presentation text" placeholder="Presentation text" rows={2} />
        </div>

        {/* Module permissions */}
        <div className="rounded-md bg-slate-100 px-4 py-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-semibold text-slate-500">Module Permission</div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Checkbox
                label="Admin"
                checked={permissions.admin}
                onChange={(next) => setPermissions((p) => ({ ...p, admin: next }))}
              />
              <Checkbox
                label="User"
                checked={permissions.user}
                onChange={(next) => setPermissions((p) => ({ ...p, user: next }))}
              />
              <Checkbox
                label="HR validation"
                checked={permissions.hrValidation}
                onChange={(next) => setPermissions((p) => ({ ...p, hrValidation: next }))}
              />
            </div>
          </div>
        </div>

        {/* Skills matrix */}
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.id} className="border-b border-slate-100 pb-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <div className="text-xs font-bold tracking-wide text-slate-600">{group.label}</div>
                  <div className="mt-2">
                    <Stars value={group.rating} />
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
                    {group.skills.map((skill) => {
                      const state = skills[skill.id];
                      return (
                        <div key={skill.id} className="min-w-0">
                          <label className="inline-flex items-center gap-2 text-sm text-slate-800">
                            <input
                              type="checkbox"
                              checked={state?.checked ?? false}
                              onChange={(e) =>
                                setSkills((prev) => ({
                                  ...prev,
                                  [skill.id]: {
                                    checked: e.target.checked,
                                    level: prev[skill.id]?.level ?? "N.A"
                                  }
                                }))
                              }
                              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="truncate">{skill.label}</span>
                          </label>
                          <div className="mt-1">
                            <Select
                              label=""
                              aria-label={`${skill.label} level`}
                              value={state?.level ?? "N.A"}
                              onChange={(e) =>
                                setSkills((prev) => ({
                                  ...prev,
                                  [skill.id]: {
                                    checked: prev[skill.id]?.checked ?? false,
                                    level: e.target.value as SkillLevel
                                  }
                                }))
                              }
                              className="max-w-full"
                            >
                              {skillLevels.map((lvl) => (
                                <option key={lvl} value={lvl}>
                                  {lvl}
                                </option>
                              ))}
                            </Select>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Availability */}
        <div className="flex flex-col gap-3 rounded-md bg-blue-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2">
            <span className="rounded-md bg-blue-100 px-3 py-1 text-xs font-bold tracking-wide text-blue-800">
              DISPONIBILITE
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <RadioPill
              name="availability"
              value="Disponible"
              label="Disponible"
              checked={availability === "Disponible"}
              onChange={(v) => setAvailability(v as Availability)}
            />
            <RadioPill
              name="availability"
              value="Occupé(e)"
              label="Occupé(e)"
              checked={availability === "Occupé(e)"}
              onChange={(v) => setAvailability(v as Availability)}
            />
            <RadioPill
              name="availability"
              value="Absent(e)"
              label="Absent(e)"
              checked={availability === "Absent(e)"}
              onChange={(v) => setAvailability(v as Availability)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

