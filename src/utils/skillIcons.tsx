import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  FileCode, 
  Cpu, 
  Layers, 
  GitBranch, 
  Box, 
  Terminal, 
  Smartphone
} from 'lucide-react';

export const getSkillIcon = (skill: string) => {
  const iconSize = "h-4 w-4";
  
  // Programming Languages - Blue color
  if (['JavaScript', 'TypeScript', 'Java', 'Python', 'C', 'C++'].includes(skill)) {
    return <Code className={iconSize} color="#3B82F6" />;
  }
  
  // Web Technologies - Green color
  if (['React.js', 'Node.js', 'Express.js', 'HTML5/CSS3', 'REST APIs'].includes(skill)) {
    return <FileCode className={iconSize} color="#22C55E" />;
  }
  
  // Databases - Orange color
  if (['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'].includes(skill)) {
    return <Database className={iconSize} color="#F97316" />;
  }
  
  // Backend - Red color
  if (['Apache Kafka', 'Flask', 'FastAPI'].includes(skill)) {
    return <Server className={iconSize} color="#EF4444" />;
  }
  
  // CS Fundamentals - Purple color
  if (['Data Structures & Algorithms', 'OOP', 'DBMS'].includes(skill)) {
    return <Cpu className={iconSize} color="#8B5CF6" />;
  }
  
  // Tools - Gray color
  if (['Git', 'Docker', 'VS Code', 'Jupyter'].includes(skill)) {
    return <GitBranch className={iconSize} color="#6B7280" />;
  }
  
  // App Development - Pink color
  if (['Flutter', 'React Native'].includes(skill)) {
    return <Smartphone className={iconSize} color="#EC4899" />;
  }
  
  // ML/AI - Cyan color
  if (['ML/AI', 'ReLU'].includes(skill)) {
    return <Layers className={iconSize} color="#06B6D4" />;
  }
  
  // Default - Neutral color
  return <Box className={iconSize} color="#71717A" />;
};